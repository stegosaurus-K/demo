// 图标数据
const info = [{
    version: '高级版',
    title: '标题1',
    content: '这是高级版正文这是高级版正文这是高级版正文这是高级版正文这是高级版正文这是高级版正文',
    id: 1
}, {
    version: '高级版',
    title: '标题2',
    content: '这是高级版正文这是高级版正文这是高级版正文这是高级版正文这是高级版正文这是高级版正文',
    id: 2
}, {
    version: '高级版',
    title: '标题3',
    content: '这是高级版正文这是高级版正文这是高级版正文这是高级版正文这是高级版正文这是高级版正文',
    id: 3
}, {
    version: '高级版',
    title: '标题4',
    content: '这是高级版正文这是高级版正文这是高级版正文这是高级版正文这是高级版正文这是高级版正文',
    id: 4
}, {
    version: '定制版',
    title: '标题5',
    content: '这是定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文',
    id: 5
}, {
    version: '定制版',
    title: '标题6',
    content: '定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文',
    id: 6
}, {
    version: '定制版',
    title: '标题7',
    content: '定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文',
    id: 7
}, {
    version: '定制版',
    title: '标题8',
    content: '这是定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文内容',
    id: 8
}, {
    version: '定制版',
    title: '标题9',
    content: '定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文',
    id: 9
}, {
    version: '高级版',
    title: '标题10',
    content: '这是高级版正文这是高级版正文这是高级版正文这是高级版正文这是高级版正文这是高级版正文',
    id: 10
},]

const actions = {
    async queryData() {
        //  用 Promise 模拟向服务器请求数据
        let itemInfo = [];
        try {
            itemInfo = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(info)
                }, 100);
            })
        } catch (error) { }

        return {
            type: 'GET_STATE',
            info: itemInfo
        }
    }
}
export default actions;