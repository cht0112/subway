(function () {
    var URL = justep.Request.convertURL("/UI/system/components/ueditor/",true);

    window.UEDITOR_CONFIG = {

        //为编辑器实例添加一个路径，这个不能被注释
        UEDITOR_HOME_URL : URL

        //图片上传配置区
        ,imageUrl:justep.Request.convertURL("/UI/system/components/ueditor/imageUp.j")             //图片上传提交地址
        ,imagePath:justep.Request.BASE_URL+"/UI/system/components/ueditor/view.j"                     //图片修正地址，引用了fixedImagePath,如有特殊需求，可自行配置
        //,imageFieldName:"upfile"                   //图片数据的key,若此处修改，需要在后台对应文件修改对应参数
        //,compressSide:0                            //等比压缩的基准，确定maxImageSideLength参数的参照对象。0为按照最长边，1为按照宽度，2为按照高度
        //,maxImageSideLength:900                    //上传图片最大允许的边长，超过会自动等比缩放,不缩放就设置一个比较大的值，更多设置在image.html中

        //远程抓取配置区
        ,catchRemoteImageEnable:false               //是否开启远程图片抓取,默认开启

        //图片在线管理配置区
        ,imageManagerUrl:justep.Request.convertURL("/UI/system/components/ueditor/imageManager.j")       //图片在线管理的处理地址
        ,imageManagerPath:justep.Request.BASE_URL+"/UI/system/components/ueditor/view.j"                                    //图片修正地址，同imagePath

        //word转存配置区
        ,wordImageUrl:justep.Request.convertURL("/UI/system/components/ueditor/imageUp.j")             //word转存提交地址
        ,wordImagePath:justep.Request.BASE_URL+"/UI/system/components/ueditor/view.j"                       //
        //,wordImageFieldName:"upfile"                     //word转存表单名若此处修改，需要在后台对应文件修改对应参数

        //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的从新定义
        , toolbars:[
            ['fullscreen', 'undo', 'redo', 'searchreplace', 'removeformat', 'formatmatch', 'pasteplain', '|',
                'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist',
                'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
                'paragraph', 'fontfamily', 'fontsize', '|',
                'indent', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', 
                'link', 'unlink', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
                'insertimage', 'wordimage', 'spechars', '|', 'print' ]
        ]

    	, disableExclude:['fullscreen', 'preview', 'print'] //禁用时排除的按钮
        ,initialContent:''    //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子

        ,initialFrameWidth:1000  //初始化编辑器宽度,默认1000
        ,initialFrameHeight:10  //初始化编辑器高度,默认320

        ,zIndex : 100     //编辑器层级的基数,默认是900

        ,elementPathEnabled : false

        ,autoHeightEnabled:false
    };
})();
