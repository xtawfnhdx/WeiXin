//Page Object
Page({
  data: {
    pageName: "this is pages",
    person: {
      name: "personname",
      age: 13,
    },
    ischeck: false,
    list: [
      { id: 0, name: "one" },
      { id: 1, name: "two" },
      { id: 3, name: "three" },
    ],
    list2: [
      {
        id:  [
          { keys: "a", values: "aaa" },
          { keys: "b", values: "bbb" },
        ],
      },
      { 
        id: [
          { keys: "c", values: "ccc" },
          { keys: "d", values: "ddd" },
        ],
      },
      {
        id:  [
          { keys: "e", values: "eee" },
          { keys: "f", values: "fff" },
        ],
      },
    ],
  },
  //options(Object)
  onLoad: function (options) {},
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function (item) {},
});
