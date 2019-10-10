import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF, faTwitter, faLinkedinIn, faRedditAlien, faWhatsapp, faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import styles from './BlogPostLayout.module.css';

function SocialShare(config) {
  return (
    <div className={styles.postSocial}>
      <FacebookShareButton {...config} className={[styles.socialButton, styles.facebook]}>
        <span className={styles.faIcon}>
          <FontAwesomeIcon icon={faFacebookF} />
        </span>
        <span className={styles.faIconText}>Facebook</span>
      </FacebookShareButton>
      <TwitterShareButton {...config} className={[styles.socialButton, styles.twitter]} via="smddzcy">
        <span className={styles.faIcon}>
          <FontAwesomeIcon icon={faTwitter} />
        </span>
        <span className={styles.faIconText}>Twitter</span>
      </TwitterShareButton>
      <LinkedinShareButton {...config} className={[styles.socialButton, styles.linkedin]}>
        <span className={styles.faIcon}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </span>
        <span className={styles.faIconText}>LinkedIn</span>
      </LinkedinShareButton>
      <RedditShareButton {...config} className={[styles.socialButton, styles.reddit]}>
        <span className={styles.faIcon}>
          <FontAwesomeIcon icon={faRedditAlien} />
        </span>
        <span className={styles.faIconText}>Reddit</span>
      </RedditShareButton>
      <WhatsappShareButton {...config} className={[styles.socialButton, styles.whatsapp]}>
        <span className={styles.faIcon}>
          <FontAwesomeIcon icon={faWhatsapp} />
        </span>
        <span className={styles.faIconText}>WhatsApp</span>
      </WhatsappShareButton>
      <TelegramShareButton {...config} className={[styles.socialButton, styles.telegram]}>
        <span className={styles.faIcon}>
          <FontAwesomeIcon icon={faTelegram} />
        </span>
        <span className={styles.faIconText}>Telegram</span>
      </TelegramShareButton>
    </div>
  );
}

export default SocialShare;
