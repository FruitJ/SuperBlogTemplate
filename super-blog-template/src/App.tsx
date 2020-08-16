import React from 'react';
import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { HashRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';

import style from './App.module.css';

import Home from './pages/home';
import Blog from './pages/blog';
import Music from './pages/music';
import Resource from './pages/resource';
import ImportantEvents from './pages/importantEvents';


function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className={ style["App"] }>
        <Router>
          <Switch>
            {/* 首页 */}
            <Route exact path="/" component={ Home } />
            <Redirect exact from="/home" to="/" />
            {/* 博客页 */}
            <Route exact path="/blog" component={ Blog } />
            {/* 音乐页 */}
            <Route exact path="/music" component={ Music } />
            {/* 资源页 */}
            <Route exact path="/resource" component={ Resource } />
            {/* 大事件页 */}
            <Route exact path="/importantEvents" component={ ImportantEvents } />
          </Switch>
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App;
