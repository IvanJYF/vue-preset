module.exports = [
    {
        type: "list",
        message: "创建项目的类型",
        name: "type",
        choices:[
            {
                name: 'pc',
                checked: true
            },
            {
                name: 'h5',
                checked: true
            },
        ]
    }
]