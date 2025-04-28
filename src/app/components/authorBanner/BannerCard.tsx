'use client';

import React from 'react';
import styles from '@/app/styles/Home.module.css';
import {Avatar, Container, HoverCard, Text} from '@radix-ui/themes';
import {GitHubLogoIcon} from '@radix-ui/react-icons';
import {clsx} from 'clsx';
import {motion} from 'framer-motion';
import constantUtils from '@/app/utils/constantUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function BannerCard() {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
    >
        <div style={{
            transition: 'all 0.5s',
        }}
             className={styles.bannerCard}>
            <div className="relative w-full max-w-md">
                {/* 图案 */}
                <div
                    className={clsx('absolute -left-16 -bottom-8 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-50 animate-pulse', styles.bannerCardDotLeft)}/>
                <div
                    className={clsx('absolute -right-16 -top-8 w-32 h-32 bg-orange-500 rounded-full blur-2xl opacity-50 animate-pulse', styles.bannerCardDotRight)}/>
                <motion.div
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{type: 'spring', stiffness: 260, damping: 20}}
                    drag
                    dragConstraints={{
                        top: -1,
                        left: -1,
                        right: 1,
                        bottom: 1,
                    }}
                >
                    <Container
                        className="z-50 relative backdrop-blur-3xl bg-gradient-to-r from-white/40 to-white/20 p-8 rounded-xl border border-white/20 shadow-2xl">
                        <div className="flex items-center space-x-4 mb-4">
                            <Avatar className="w-32 h-32 border-2 border-white shadow-lg"
                                    src={constantUtils.companyLogo} alt="Author"
                                    size={'9'}
                                    radius='large'
                                    fallback={'Avatar'}/>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">{constantUtils.companyName}</h2>
                                <p className="text-sm text-gray-600 mt-1">{constantUtils.authorBanner.bannerBrief}</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p
                                className="text-gray-700">{constantUtils.authorBanner.bannerDesc}</p>
                            <div className="links flex space-x-4">
                                <div className="flex items-center space-x-2">
                                    <GitHubLogoIcon className="w-5 h-5 text-gray-700"/>
                                    <Text>
                                        <HoverCard.Root>
                                            <HoverCard.Trigger>
                                                <a
                                                    href={constantUtils.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={clsx(styles.underlineAnimation, 'text-blue-700', styles.glowAnimation)}
                                                >
                                                    {constantUtils.github.replace('https://github.com/', '')}
                                                </a>
                                            </HoverCard.Trigger>
                                        </HoverCard.Root>
                                    </Text>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 text-gray-700"/>
                                    <Text>
                                        <HoverCard.Root>
                                            <HoverCard.Trigger>
                                                <a
                                                    href={constantUtils.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={clsx(styles.underlineAnimation, 'text-blue-700', styles.glowAnimation)}
                                                >
                                                    {constantUtils.linkedin.replace('https://www.linkedin.com/in/', '').replace('mustangwu05042001/', 'mustangwu')}
                                                </a>
                                            </HoverCard.Trigger>
                                        </HoverCard.Root>
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Container>
                </motion.div>
            </div>
        </div>
    </motion.div>
);
}   