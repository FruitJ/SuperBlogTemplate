import React, { Component } from 'react';
import { Tag, Button, } from 'antd';
import { WeiboOutlined, GithubOutlined, WechatOutlined, QqOutlined, ZhihuOutlined, RollbackOutlined, } from '@ant-design/icons';
import { withRouter,RouteComponentProps, } from 'react-router-dom';

import style from './index.module.css';
import './index.css';
import avatarImage from '../../assets/images/avatar.png';

export interface IBlogProps extends RouteComponentProps {

}

export interface IBlogState {

}

class _Blog extends React.Component<IBlogProps, IBlogState> {
    constructor(props: IBlogProps) {
        super(props);
        this.state = {};
    }

    handleBack = () => {
        this.props.history.go(-1);
    };

    render() {
        return (
            <div className={style["blog-container"]}>
                <div className={style["blog-content"]}>
                    <div className={`${style["blog-show"]} ${style["blog-inner"]}`}>
                        <div className={ style["nav"] }>
                            <RollbackOutlined onClick={ this.handleBack } />
                        </div>
                        <div className={style["top"]}>
                            <div className={style["avator"]}>
                                <div className={style["author"]}>
                                    <img src={avatarImage} alt="" />
                                </div>
                            </div>
                            <div className={style["self-name"]}>
                                <h2>FruitJ</h2>
                            </div>
                            <div className={style["self-mockery"]}>
                                <h3>一个逗比的准程序员小哥</h3>
                            </div>
                            <div className={style["divid"]} ></div>
                            <div className={style["motto"]}>
                                在心情最糟糕的时候，仍会按时吃饭，早睡早起，自律如昔——这样的人才是能扛事的人。人事再乱，打不乱你心。人，不需要有那么多过人之处，能扛事就是才华横溢。
                            </div>
                        </div>
                        <div className={style["bottom"]}>
                            <div className={style["tag"]}>
                                <Tag color="magenta">HTML</Tag>
                                <Tag color="red">CSS</Tag>
                                <Tag color="volcano">JavaScript</Tag>
                                <Tag color="orange">React</Tag>
                                <Tag color="gold">Vue</Tag>
                                <Tag color="lime">jQuery</Tag>
                                <Tag color="green">Node.js</Tag>
                                <Tag color="cyan">Koa.js</Tag>
                                <Tag color="blue">antd</Tag>
                                <Tag color="geekblue">element-ui</Tag>
                                <Tag color="purple">typescript</Tag>
                                <Tag color="orange">小程序</Tag>
                            </div>
                            <div className={style["chat"]}>
                                <WeiboOutlined className={`${style["icon-weibo"]} ${style["icon"]}`} />
                                <GithubOutlined className={`${style["icon-github"]} ${style["icon"]}`} />
                                <WechatOutlined className={`${style["icon-wechat"]} ${style["icon"]}`} />
                                <QqOutlined className={`${style["icon-qq"]} ${style["icon"]}`} />
                                <ZhihuOutlined className={`${style["icon-zhihu"]} ${style["icon"]}`} />
                            </div>
                        </div>
                    </div>
                    <div className={`${style["blog-content"]}  ${style["blog-inner"]}`}>
                        <div className={ style["content"] }>
                            <ul>
                                <li>
                                    <div className={ style["ctx"] }>
                                        <h3 className={ style["title"] }>一文带你轻松入门</h3>
                                        <p className={ style["article"] }>生活是什么？生活是柴米油盐的平淡；是行色匆匆早出晚归的奔波；生活是错的时间遇到对的人的遗憾；是爱的付出与回报；生活是看不同的风景，遇到不同的人；是行至水穷尽，坐看云起时的峰回路转；生活是灵魂经历伤痛后的微笑怒放；是挫折坎坷被晾晒后的坚强；生活是酸甜苦辣被岁月沉淀后的馨香；是经历风霜雪雨洗礼后的懂得；生活是走遍千山万水后，回眸一笑的洒脱。生活是什么？生活是柴米油盐的平淡；是行色匆匆早出晚归的奔波；生活是错的时间遇到对的人的遗憾；是爱的付出与回报；生活是看不同的风景，遇到不同的人；是行至水穷尽，坐看云起时的峰回路转；生活是灵魂经历伤痛后的微笑怒放；是挫折坎坷被晾晒后的坚强；生活是酸甜苦辣被岁月沉淀后的馨香；是经历风霜雪雨洗礼后的懂得；生活是走遍千山万水后，回眸一笑的洒脱。</p>
                                        <div className={ style["show-bar"] }>
                                            <span>2020-08-06</span>
                                            <span>·</span>
                                            <span>JavaScript</span>
                                            <Button type="primary" ghost={ true } size="small">继续阅读</Button>
                                        </div>
                                    </div>
                                    <div className={ style["divid"] }></div>
                                </li>
                                <li>
                                    <div className={ style["ctx"] }>
                                        <h3 className={ style["title"] }>一文带你轻松入门</h3>
                                        <p className={ style["article"] }>生活是什么？生活是柴米油盐的平淡；是行色匆匆早出晚归的奔波；生活是错的时间遇到对的人的遗憾；是爱的付出与回报；生活是看不同的风景，遇到不同的人；是行至水穷尽，坐看云起时的峰回路转；生活是灵魂经历伤痛后的微笑怒放；是挫折坎坷被晾晒后的坚强；生活是酸甜苦辣被岁月沉淀后的馨香；是经历风霜雪雨洗礼后的懂得；生活是走遍千山万水后，回眸一笑的洒脱。生活是什么？生活是柴米油盐的平淡；是行色匆匆早出晚归的奔波；生活是错的时间遇到对的人的遗憾；是爱的付出与回报；生活是看不同的风景，遇到不同的人；是行至水穷尽，坐看云起时的峰回路转；生活是灵魂经历伤痛后的微笑怒放；是挫折坎坷被晾晒后的坚强；生活是酸甜苦辣被岁月沉淀后的馨香；是经历风霜雪雨洗礼后的懂得；生活是走遍千山万水后，回眸一笑的洒脱。</p>
                                        <div className={ style["show-bar"] }>
                                            <span>2020-08-06</span>
                                            <span>·</span>
                                            <span>JavaScript</span>
                                            <Button type="primary" ghost={ true } size="small">继续阅读</Button>
                                        </div>
                                    </div>
                                    <div className={ style["divid"] }></div>
                                </li>
                                <li>
                                    <div className={ style["ctx"] }>
                                        <h3 className={ style["title"] }>一文带你轻松入门</h3>
                                        <p className={ style["article"] }>生活是什么？生活是柴米油盐的平淡；是行色匆匆早出晚归的奔波；生活是错的时间遇到对的人的遗憾；是爱的付出与回报；生活是看不同的风景，遇到不同的人；是行至水穷尽，坐看云起时的峰回路转；生活是灵魂经历伤痛后的微笑怒放；是挫折坎坷被晾晒后的坚强；生活是酸甜苦辣被岁月沉淀后的馨香；是经历风霜雪雨洗礼后的懂得；生活是走遍千山万水后，回眸一笑的洒脱。生活是什么？生活是柴米油盐的平淡；是行色匆匆早出晚归的奔波；生活是错的时间遇到对的人的遗憾；是爱的付出与回报；生活是看不同的风景，遇到不同的人；是行至水穷尽，坐看云起时的峰回路转；生活是灵魂经历伤痛后的微笑怒放；是挫折坎坷被晾晒后的坚强；生活是酸甜苦辣被岁月沉淀后的馨香；是经历风霜雪雨洗礼后的懂得；生活是走遍千山万水后，回眸一笑的洒脱。</p>
                                        <div className={ style["show-bar"] }>
                                            <span>2020-08-06</span>
                                            <span>·</span>
                                            <span>JavaScript</span>
                                            <Button type="primary" ghost={ true } size="small">继续阅读</Button>
                                        </div>
                                    </div>
                                    <div className={ style["divid"] }></div>
                                </li>
                                <li>
                                    <div className={ style["ctx"] }>
                                        <h3 className={ style["title"] }>一文带你轻松入门</h3>
                                        <p className={ style["article"] }>生活是什么？生活是柴米油盐的平淡；是行色匆匆早出晚归的奔波；生活是错的时间遇到对的人的遗憾；是爱的付出与回报；生活是看不同的风景，遇到不同的人；是行至水穷尽，坐看云起时的峰回路转；生活是灵魂经历伤痛后的微笑怒放；是挫折坎坷被晾晒后的坚强；生活是酸甜苦辣被岁月沉淀后的馨香；是经历风霜雪雨洗礼后的懂得；生活是走遍千山万水后，回眸一笑的洒脱。生活是什么？生活是柴米油盐的平淡；是行色匆匆早出晚归的奔波；生活是错的时间遇到对的人的遗憾；是爱的付出与回报；生活是看不同的风景，遇到不同的人；是行至水穷尽，坐看云起时的峰回路转；生活是灵魂经历伤痛后的微笑怒放；是挫折坎坷被晾晒后的坚强；生活是酸甜苦辣被岁月沉淀后的馨香；是经历风霜雪雨洗礼后的懂得；生活是走遍千山万水后，回眸一笑的洒脱。</p>
                                        <div className={ style["show-bar"] }>
                                            <span>2020-08-06</span>
                                            <span>·</span>
                                            <span>JavaScript</span>
                                            <Button type="primary" ghost={ true } size="small">继续阅读</Button>
                                        </div>
                                    </div>
                                    <div className={ style["divid"] }></div>
                                </li>
                                <li>
                                    <div className={ style["ctx"] }>
                                        <h3 className={ style["title"] }>一文带你轻松入门</h3>
                                        <p className={ style["article"] }>生活是什么？生活是柴米油盐的平淡；是行色匆匆早出晚归的奔波；生活是错的时间遇到对的人的遗憾；是爱的付出与回报；生活是看不同的风景，遇到不同的人；是行至水穷尽，坐看云起时的峰回路转；生活是灵魂经历伤痛后的微笑怒放；是挫折坎坷被晾晒后的坚强；生活是酸甜苦辣被岁月沉淀后的馨香；是经历风霜雪雨洗礼后的懂得；生活是走遍千山万水后，回眸一笑的洒脱。生活是什么？生活是柴米油盐的平淡；是行色匆匆早出晚归的奔波；生活是错的时间遇到对的人的遗憾；是爱的付出与回报；生活是看不同的风景，遇到不同的人；是行至水穷尽，坐看云起时的峰回路转；生活是灵魂经历伤痛后的微笑怒放；是挫折坎坷被晾晒后的坚强；生活是酸甜苦辣被岁月沉淀后的馨香；是经历风霜雪雨洗礼后的懂得；生活是走遍千山万水后，回眸一笑的洒脱。</p>
                                        <div className={ style["show-bar"] }>
                                            <span>2020-08-06</span>
                                            <span>·</span>
                                            <span>JavaScript</span>
                                            <Button type="primary" ghost={ true } size="small">继续阅读</Button>
                                        </div>
                                    </div>
                                    {/* <div className={ style["divid"] }></div> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const Blog = withRouter(_Blog);
export default Blog;