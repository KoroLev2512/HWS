import React from 'react';
import {MyButton} from "@/shared/ui/Button/MyButton";
import {Navigation} from "@/shared/ui/Navigation";
import Burger from "@/shared/ui/Burger/Burger";
import {useAppStore} from "@/shared/lib/store/appStore";
import Link from "next/link";
import {LanguageToggle} from "@/shared/ui/LanguageToggle";
import {useTranslation} from "react-i18next";

import styles from './styles.module.scss';

const NavigationBarToggle = (): JSX.Element => {
    const [toggleMenuPage, menuPageIsOpen] = useAppStore(state => [state.toggleMenuPage, state.menuPageIsOpen]);

    const handleClick = () => {
        toggleMenuPage();
    };

    return (
        <div>
            <Burger menuPageIsOpen={menuPageIsOpen}/>
        </div>
    );
};

export const Header = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img
                            src='/icons/logo.svg'
                            alt="logo"
                        />
                    </Link>
                </div>
                <Navigation/>
                <div className={styles.button}>
                    <MyButton>
                        {t('Contact')}
                    </MyButton>
                    <MyButton>
                        {t('More')}
                    </MyButton>
                </div>
                <LanguageToggle/>
            </div>
            {/*<div>*/}
            {/*   <NavigationBarToggle/>*/}
            {/*</div>*/}
        </>
    );
};
