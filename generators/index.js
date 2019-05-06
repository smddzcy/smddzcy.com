const blogPostGenerator = require('./blog-post-generator');

module.exports = plop => {
  plop.setGenerator('post', blogPostGenerator);
};
