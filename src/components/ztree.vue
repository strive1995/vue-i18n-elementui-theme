<template>
    <div id="areaTree">
        <div class="box-title">
            <a href="#">列表
                <i class="fa  fa-refresh" @click="freshArea">点击</i>
            </a>
        </div>
        <div class="tree-box">
            <div class="zTreeDemoBackground left">
                <ul id="treeDemo" class="ztree"></ul>
            </div>
        </div>
        <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
    </div>
</template>  
  
<script>
export default {
  name: "areaTree",
  components: {},
  data: function() {
    return {
      setting: {
        check: {
          enable: true,
          nocheckInherit: false,
          chkboxType: { Y: "p", N: "s" }
        },
        data: {
          simpleData: {
            enable: true
          }
        },
        callback: {
          beforeClick: this.beforeClick,
          onClick: this.zTreeOnClick,
          onCheck: this.zTreeOnCheck
        }
      },
      /*zNodes:[  
              { name:"父节点1 - 展开", open:true,  
                  children: [  
                      { name:"父节点11 - 折叠",  
                          children: [  
                              { name:"叶子节点111"},  
                              { name:"叶子节点112"},  
                              { name:"叶子节点113"},  
                              { name:"叶子节点114"}  
                          ]},  
                      { name:"父节点12 - 折叠",  
                          children: [  
                              { name:"叶子节点121"},  
                              { name:"叶子节点122"},  
                              { name:"叶子节点123"},  
                              { name:"叶子节点124"}  
                          ]},  
                      { name:"父节点13 - 没有子节点", isParent:true}  
                  ]},  
              { name:"父节点2 - 折叠",  
                  children: [  
                      { name:"父节点21 - 展开", open:true,  
                          children: [  
                              { name:"叶子节点211"},  
                              { name:"叶子节点212"},  
                              { name:"叶子节点213"},  
                              { name:"叶子节点214"}  
                          ]},  
                      { name:"父节点22 - 折叠",  
                          children: [  
                              { name:"叶子节点221"},  
                              { name:"叶子节点222"},  
                              { name:"叶子节点223"},  
                              { name:"叶子节点224"}  
                          ]},  
                      { name:"父节点23 - 折叠",  
                          children: [  
                              { name:"叶子节点231"},  
                              { name:"叶子节点232"},  
                              { name:"叶子节点233"},  
                              { name:"叶子节点234"}  
                          ]}  
                  ]},  
              { name:"父节点3 - 没有子节点", isParent:true}  
            ]*/

      /*zNodes:[  
              { id:1,pid:0,name:"大良造菜单",open:true,nocheck:false,  
                children: [  
                    { id:11,pid:1,name:"当前项目"},  
                    { id:12,pid:1,name:"工程管理",open:true,  
                        children: [  
                            { id:121,pid:12,name:"我的工程"},  
                            { id:122,pid:12,name:"施工调度"},  
                            { id:1211,pid:12,name:"材料竞价"}  
                        ]  
                    },  
                    { id:13,pid:1,name:"录入管理",open:true,  
                        children: [  
                            { id:131,pid:13,name:"用工录入"},  
                            { id:132,pid:13,name:"商家录入"},  
                            { id:1314,pid:13,name:"机构列表"}  
                        ]  
                    },  
                    { id:14,pid:1,name:"审核管理",open:true,  
                        children: [  
                            { id:141,pid:14,name:"用工审核"},  
                            { id:142,pid:14,name:"商家审核"},  
                            { id:145,pid:14,name:"机构审核"}  
                        ]  
                    },  
                    { id:15,pid:1,name:"公司管理",open:true,  
                        children: [  
                            { id:1517,pid:15,name:"我的工程案例"},  
                            { id:1518,pid:15,name:"联系人设置"},  
                            { id:1519,pid:15,name:"广告设置"}  
                        ]  
                    },  
                    { id:16,pid:1,name:"业务管理",open:true,  
                        children: [  
                            { id:164,pid:16,name:"合同范本"},  
                            { id:165,pid:16,name:"合同列表"},  
                            { id:166,pid:16,name:"需求调度"}  
                        ]  
                    },  
                    { id:17,pid:1,name:"订单管理",open:true,  
                        children: [  
                            { id:171,pid:17,name:"商品订单"},  
                            { id:172,pid:17,name:"用工订单"},  
                            { id:175,pid:17,name:"供应菜单"}  
                        ]  
                    },  
                    { id:18,pid:1,name:"我的功能",open:true,  
                        children: [  
                            { id:181,pid:18,name:"免费设计"},  
                            { id:182,pid:18,name:"装修报价"},  
                            { id:1817,pid:18,name:"项目用工"}  
                        ]  
                    },  
                    { id:19,pid:1,name:"分润管理",open:true,  
                        children: [  
                            { id:191,pid:19,name:"分润列表"}  
                        ]  
                    },  
                    { id:110,pid:1,name:"运营管理",open:true,  
                        children: [  
                            { id:1101,pid:110,name:"代理列表"},  
                            { id:1102,pid:110,name:"代售商品"}  
                        ]  
                    },  
                ]  
              }  
            ]  */
      //zNodes 这个里面数据可以灵活配置的，不再叙述
      zNodes: [
        {
          id: 1,
          name: "首页",
          purview: 1,
          isVisible: false,
          buttons: [],
          items: [],
          isParent: true
        },
        {
          id: 2,
          name: "前端布置",
          purview: 1,
          isVisible: false,
          buttons: [],
          // "items": [
          children: [
            {
              id: 11,
              // "title": "banner位设置",
              name: "banner位设置",
              purview: 1,
              itemButtons: []
            },
            {
              id: 12,
              name: "分区和标签",
              purview: 0,
              // "itemButtons": [
              children: [
                {
                  id: 5,
                  name: "二级分区管理",
                  purview: 0,
                  key: ""
                }
              ]
            },
            {
              id: 9,
              name: "启动页和icon设置",
              purview: 0,
              itemButtons: []
            },
            {
              id: 10,
              name: "礼物设置统计",
              purview: 0,
              itemButtons: []
            }
          ]
        },
        {
          id: 3,
          name: "用户管理",
          purview: 1,
          isVisible: false,
          children: [
            {
              id: 6,
              name: "--用户",
              purview: 1,
              key: "Users"
            },
            {
              id: 9,
              name: "查看记录",
              purview: 0,
              key: "seeRecord"
            },
            {
              id: 10,
              name: "查看消记录",
              purview: 0,
              key: "seeRecord2"
            },
            {
              id: 8,
              name: "--用户",
              purview: 1,
              key: "uUsers"
            }
          ],
          items: []
        },
        {
          name: "父节点1 - 展开",
          open: true,
          id: 122,
          children: [
            {
              name: "父节点11 - 折叠",
              children: [
                { name: "叶子节点111" },
                { name: "叶子节点112" },
                { name: "叶子节点113" },
                { name: "叶子节点114" }
              ]
            },
            {
              name: "父节点12 - 折叠",
              children: [
                { name: "叶子节点121" },
                { name: "叶子节点122" },
                { name: "叶子节点123" },
                { name: "叶子节点124" }
              ]
            },
            { name: "父节点13 - 没有子节点", isParent: true }
          ]
        },
        { name: "父节点3 - 没有子节点", isParent: true, id: 3 }
      ]
    };
  },
  methods: {
    freshArea: function() {
      $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
    },
    zTreeOnClick: function(event, treeId, treeNode) {
      console.log(treeNode.tId + ", " + treeNode.name);
    },
    zTreeOnCheck: function(event, treeId, treeNode) {
      console.log(treeNode.tId + ", " + treeNode.name + "," + treeNode.checked);
      var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        checkCount = zTree.getCheckedNodes(true).length, //选中
        nocheckCount = zTree.getCheckedNodes(false).length, //未选中
        changeCount = zTree.getChangeCheckedNodes().length; //获取输入框勾选状态被改变的节点集合（与原始数据 checkedOld 对比）
      var checkedNames = [],
        checkedIds = [];
      for (var i = 0; i <= zTree.getCheckedNodes(true).length - 1; i++) {
        checkedIds.push(zTree.getCheckedNodes(true)[i].id);
        checkedNames.push(zTree.getCheckedNodes(true)[i].name);
      }
      console.log(checkedIds);
      console.log(checkedNames);
    },
    beforeClick: function(treeId, treeNode) {
      var zTree = $.fn.zTree.getZTreeObj("treeDemo");
      // zTree.checkNode(treeNode, !treeNode.checked, null, true);
      zTree.checkNode(treeNode, !treeNode.checked, true, true); //第二个参数!treeNode.checked和"",省略此参数效果等同，则根据对此节点的勾选状态进行 toggle 切换，第三个参数设置为true时候进行父子节点的勾选联动操作 ，第四个参数true 表示执行此方法时触发 beforeCheck & onCheck 事件回调函数；false 表示执行此方法时不触发事件回调函数
      return false;
    }
  },
  mounted() {
    $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes).expandAll(true);
  }
};
</script>  
<style>
#areaTree {
  border: 1px solid #e5e5e5;
  margin-bottom: 2px;
  border-radius: 4px;
  overflow: hidden;
}
.box-title {
  border-radius: 3px 3px 0 0;
  background-color: #f5f5f5;
}
.box-title a {
  color: #2fa4e7;
  text-decoration: none;
  font-size: 14px;
  display: block;
  padding: 8px 15px;
  cursor: pointer;
}
.box-title .fa {
  float: right;
  line-height: 20px;
}
</style>  