// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из 

import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import styles from './AppRouter.module.css';

import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';

export default class AppRouter extends Component {
    getTitle = () => {
        const { location: { pathname } } = this.props;
        const name = pathname.split('/')[2] || 'home';

        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    renderNav = () => (
        <nav className={styles.nav}>
            <ul className={styles.navList + ' t-nav-list'}>
                <li className={styles.navElement}>
                    <NavLink to="/app" exact className={styles.link + ' t-link-home'}>Home</NavLink>
                </li>
                <li className={styles.navElement}>
                    <NavLink to="/app/inbox" className={styles.link + ' t-link-inbox'}>Inbox</NavLink>
                </li>
                <li className={styles.navElement}>
                    <NavLink to="/app/outbox" className={styles.link + ' t-link-outbox'}>Outbox</NavLink>
                </li>
            </ul>
        </nav>
    );

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    { this.renderNav() }
                    <div className={styles.content}>
                        <h3 className={styles.title}>{ this.getTitle() }</h3>
                        <Switch>
                            <Route path="/app" component={Home} exact />
                            <Route path="/app/inbox" component={InboxList} exact />
                            <Route path="/app/inbox/:id" component={InboxMail} />
                            <Route path="/app/outbox" component={OutboxList} exact />
                            <Route path="/app/outbox/:id" component={OutboxMail} />
                        </Switch>
                    </div>
                </div>
            </div>     
        );
    }
}