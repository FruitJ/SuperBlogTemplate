import React, { Component } from 'react';
import { Link, withRouter,RouteComponentProps, } from 'react-router-dom';
import * as H from 'history';
import { Menu, Button, } from 'antd';
import { HomeOutlined, GoldOutlined, FileTextOutlined, CustomerServiceOutlined, AndroidOutlined, AppleOutlined, WindowsOutlined, GithubOutlined, SnippetsOutlined, } from '@ant-design/icons';

import style from './index.module.css';
import './index.css';
import alipayImage from '../../assets/images/alipay.png';
import we_chatImage from '../../assets/images/me_wechat.jpg';

export interface IHomeProps extends RouteComponentProps {
    history: H.History,
}

export interface IHomeState {
    current: string,
    isShareShow: boolean,
    isContactShow: boolean,
    isRewardShow: boolean,
}

const keyPath: Array<string> = [
    "home",
    "blog",
    "music",
    "importantEvent",
];

class _Home extends Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            current: 'home', // 导航当前项
            isShareShow: false, // 分享相关元素是否展示的标志
            isContactShow: false, // 加入我们相关元素是否展示的标志
            isRewardShow: false, // 打赏相关元素是否展示的标志
        };
    }

    handleClick = (e: any): void => {
        console.log('click ', e);
        this.setState({ current: e.key });
        if (keyPath.includes(e.keyPath[0])) { // 跳转界面
            this.props.history.push(`/${e.keyPath[0]}`);
        }
    };

    // 点击分享的回调函数
    shareHandleClick = (): void => {
        this.setState({
            isShareShow: !this.state.isShareShow,
        });
    };

    // 加入我们的回调函数
    contactHandleClick = (): void => {
        this.setState({
            isContactShow: !this.state.isContactShow,
        });
    };

    // 点击打赏的回调函数
    rewardHandleClick = (): void => {
        this.setState({
            isRewardShow: !this.state.isRewardShow,
        });
    };

    render() {
        const { current } = this.state;
        return (
            <div className={style["home-container"]}>
                {/* header 区域 */}
                <header className={style["header"]}>

                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="home" icon={<HomeOutlined />}>
                            首页
        </Menu.Item>
                        <Menu.Item key="blog" icon={<FileTextOutlined />}>
                            博客
        </Menu.Item>
                        <Menu.Item key="music" icon={<CustomerServiceOutlined />}>
                            音乐
                        </Menu.Item>
                        <Menu.Item key="resource" icon={<GoldOutlined />}>
                            资源分享
                        </Menu.Item>
                    </Menu>
                </header>
                {/* main 区域 */}
                <main className={style["main"]}>
                    <h2>Welcome FruitJ's Home</h2>
                    <div className={style["user"]}>
                        <div className={style["outer-rotate"]}>
                            <span>生活</span>
                            <span>工作</span>
                            <span>理想</span>
                            <span>现实</span>
                        </div>
                        <div className={style["inner-rotate"]}>
                            <span>亲人</span>
                            <span>朋友</span>
                            <span>贵人</span>
                            <span>恩师</span>
                        </div>
                        <div className={style["user-status"]}>
                            <span>未登录</span>
                        </div>
                    </div>
                    {/* 大事迹 与 GitHub */}
                    <div className={style["event-git"]}>
                        <Button type="primary" icon={<SnippetsOutlined />}>
                            <Link to="/importantEvents" style={{ color: "#FFF" }}>大事迹</Link>
                        </Button>
                        <Button type="primary" icon={<GithubOutlined />} className={style["github"]}>GitHub</Button>
                    </div>
                    {/* 分享 */}
                    <div className={style["share"]} style={{ display: `${this.state.isShareShow ? 'block' : 'none'}` }}>
                        <div className="bdsharebuttonbox">
                            <a href="#" className="bds_more" data-cmd="more"></a>
                            <a href="#" className="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
                            <a href="#" className="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                            <a href="#" className="bds_renren" data-cmd="renren" title="分享到人人网"></a>
                            <a href="#" className="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
                        </div>
                    </div>
                    {/* 联系我们 */}
                    <div className={style["me-wechat"]} style={{ display: `${this.state.isContactShow ? 'block' : 'none'}` }}>
                        <img src={we_chatImage} alt="" />
                    </div>
                    {/* 打赏【放上自己的支付宝收款二维码】 */}
                    <div className={style["alipay"]} style={{ display: `${this.state.isRewardShow ? 'block' : 'none'}` }}>
                        <img src={alipayImage} alt="" />
                    </div>
                    <aside className={style["aside"]}>
                        <div className={style["content"]}>
                            <p className={style["common"]} onClick={this.shareHandleClick}>分享</p>
                            <p onClick={this.contactHandleClick}>联系<br />我们</p>
                            <p className={style["common"]} onClick={this.rewardHandleClick}>赞助</p>
                        </div>
                    </aside>
                </main>
                {/* footer 区域 */}
                <footer className={style["footer"]}>
                    <div className={style["content"]}>

                        <div className={style["download"]}>
                            <h3>下载客户端: </h3>
                            <div className={style["platform"]}>
                                <a href="###">
                                    <AndroidOutlined />
                                </a>
                                <a href="###">
                                    <AppleOutlined />
                                </a>
                                <a href="###">
                                    <WindowsOutlined />
                                </a>
                            </div>
                        </div>
                        <div className={style["description"]}>
                            <p>
                                <span>
                                    Copyright © 2020 承运官网 fruitj.top All Rights Reserved.
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    备案号: 冀ICP备20015617号
                                </span>
                            </p>
                        </div>
                        <div className={style["friend-link"]}>
                            <h3>友情链接: </h3>
                            {/* 虚位以待 */}
                        </div>

                    </div>
                </footer>
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props);

    }
}

const Home = withRouter(_Home);

export default Home;