// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Mail.module.css';

const Mail = ({ mail, type }) => (
    <div className={styles.container}>
        <p className={`t-mail-${type.toLowerCase()}`}>
            {type}: <b>{mail[type.toLowerCase()]}</b>
        </p>
        <p className="t-mail-body">{mail.body}</p>
        <Link
            to={`/app/${mail.from ? 'inbox' : 'outbox'}`}
            className="MailList_link">
            Вернуться к списку
        </Link>
    </div>
);

export default Mail;