import React from "react";
import { EyeOutline } from 'antd-mobile-icons';
import { Dialog } from 'antd-mobile';
import './Icon.less';
function Icon(props) {
    let { item, advanced, ordered } = props;
    const { title, version, content } = item;

    const handle = (className) => {
        if (className === 'unhighlight-icon') return;  // 如果图标不是高亮的，点击不了
        Dialog.alert({
            title: version + '-' + title,
            content: content,
            bodyClassName: 'dialog'
        })
    }

    /* 根据传过来的 advanced 和 ordered 来判断图标高亮与否*/
    let className;
    if (advanced) {
        className = version === '高级版' ? 'highlight-icon' : 'unhighlight-icon'
    }
    if (ordered) {
        className = 'highlight-icon'
    }
    return <div className="icon-box">
        <div className={`${className} icon`} onClick={handle.bind(null, className)}>
            <EyeOutline />
        </div>
        <div className="sub-title">{title}</div>
    </div>
}
export default Icon;