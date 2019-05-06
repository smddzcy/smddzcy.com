module.exports = {
  description: 'Create a new blog post',
  prompts: [
    {
      type: 'input',
      name: 'title',
      message: 'Title',
      default: '',
    },
    {
      type: 'input',
      name: 'tags',
      message: 'Tags (comma separated)',
      default: '',
    },
    {
      type: 'input',
      name: 'spoiler',
      message: 'Spoiler',
      default: '',
    },
  ],
  actions: data => {
    data.tags = (data.tags || '').split(',').map(tag => tag.trim());
    const date = new Date();
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    if (m < 10) {
      m = `0${m}`;
    }
    let d = date.getDate();
    if (d < 10) {
      d = `0${d}`;
    }
    const avoidInSlug = ['a', 'an', 's', 't'];
    data.slug = (data.title || '').replace(/[^\w\s]/g, '')
      .match(/\w+/ig)
      .map(word => word.toLowerCase())
      .filter(word => !avoidInSlug.includes(word))
      .join('-');
    const actions = [
      {
        type: 'add',
        path: `../src/routes/posts/${y}-${m}-${d}-{{kebabCase slug}}/post.js`,
        templateFile: './post.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/routes/posts/${y}-${m}-${d}-{{kebabCase slug}}/document.mdx`,
        templateFile: './document.mdx.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
