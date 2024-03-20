import React, { useState, useEffect } from "react";
import { Divider } from 'antd-mobile';
import Icon from "../components/Icon";
import NavBar from "../components/NavBar";
import { connect } from 'react-redux';
import actions from "../store/action";

function Home(props) {
    const { queryData, items: iconItems } = props; // 从store容器中结构出 状态 和 派发的方法
    const [advanced, setAdvanced] = useState(true);  // 控制‘高级版’高亮, 默认先展示高级版
    const [ordered, setOrdered] = useState(false);   // 控制‘定制版’高亮
    const [items, setItems] = useState([]);  // 保存图标信息

    useEffect(() => {
        queryData(); // 首次渲染完毕后执行派发的方法请求数据
        setItems(iconItems); // 请求数据后更新icon
    }, [iconItems, queryData]);

    /* 控制点击定制版/高级版显示 */
    const handle = (advanced, ordered) => {
        setAdvanced(advanced);
        setOrdered(ordered);
    }
    return <>
        <NavBar />
        <Divider />
        <div className="header-box">
            <div className={advanced ? 'highlight-box' : "unhighlight-box"} onClick={handle.bind(null, true, false)}>
                <div className="advanced">高级版</div>
                <div className="desc">适合独立摄影师</div>
            </div>
            <div className={ordered ? 'highlight-box' : "unhighlight-box"} onClick={handle.bind(null, false, true)}>
                <div className="advanced">定制版</div>
                <div className="desc">适合小型工作室</div>
            </div>
        </div>
        <Divider style={{
            borderWidth: '4px',
            marginTop: '4px'
        }} />
        <div className="sub-items">
            <div className="title">
                {advanced && '高级版'}
                {ordered && '定制版'}
                <span className="desc">
                    （
                    适合
                    <span className="sub-desc">
                        {advanced && '独立摄影师'}
                        {ordered && '小型工作室'}
                    </span> ）
                </span>
            </div>
            <div className="items">
                {
                    items.length !== 0 && items.map(item => {
                        return <Icon item={item} key={item.id} advanced={advanced} ordered={ordered} />
                    })
                }
            </div>
        </div>
    </>
}
export default connect(state => state, actions)(Home);