// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

const MailList = ({ type, mails }) => (
    <div className={styles.container + ` t-${type}-list`}>
        {mails.map(mail => (
            <Link
                to={`/app/${type}/${mail.id}`}
                key={mail.id}
                className={styles.link}
            >
                {`${mail.body.substr(0, 52)}...`}
            </Link>
        ))}
    </div>
);

export default MailList;