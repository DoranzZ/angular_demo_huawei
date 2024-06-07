import { Component } from '@angular/core';

@Component({
  selector: 'app-huawei',
  templateUrl: './huawei.component.html',
  styleUrl: './huawei.component.css'
})
export class HuaweiComponent {

  bannerList:any = [
    {
      id: 1,
      url: 'assets/1bbd00b2b3a549ca866831e6ae86ef79.png'
    },
    {
      id: 2,
      url: 'assets/6d110ae013d94444972b93748e7fc17c.png'
    },
    {
      id: 3,
      url: 'assets/cf10cad0a7214a0b9ef88bb04ac102d2.png'
    },
    {
      id: 4,
      url: 'assets/d8e5816391014c7abff64ac50e9a84b4.png'
    },
  ]

  // TS 配合 [ngStyle] 实现鼠标悬停效果
  element_display_status: string = ''

  hovered_id: number = 0;

  // 这个方法的作用: (1) 动态改变样式; (2) 获取悬浮元素的 id
  onMouseOver_banner_p_item(index: number) {
    this.element_display_status = 'block';
    this.hovered_id = index;
  }

  onMouseOut_banner_p_item() {
    this.element_display_status = 'none';
    this.hovered_id = 0;
  }

  // 轮播图上的列表数据
  banner_product_list:any = [
    {
      id: 1,
      title: '手机'
    },
    {
      id: 2,
      title: '穿戴'
    },
    {
      id: 3,
      title: '平板'
    },
    {
      id: 4,
      title: '电脑'
    },
    {
      id: 5,
      title: '耳机音响'
    },
    {
      id: 6,
      title: '智慧屏'
    },
    {
      id: 7,
      title: '智能家居'
    },
    {
      id: 8,
      title: '出行车品'
    },
    {
      id: 9,
      title: '数码配件'
    },
    {
      id: 10,
      title: '增值服务'
    },
    {
      id: 11,
      title: '商用终端'
    },
    {
      id: 12,
      title: '生态周边'
    }
  ]

  // 产品系列展示
  product_series_display_list:any = [
    {
      id: 1,
      title: '智慧办公',
      url: 'assets/0_1_ZhiHuiBanGong.png'
    },
    {
      id: 2,
      title: '智能家居',
      url: 'assets/0_2_ZhiNengJiaJv.ong.png'
    },
    {
      id: 3,
      title: '鸿蒙智行',
      url: 'assets/0_3_HongMengZhiXing.png'
    },
    {
      id: 4,
      title: '华为手机',
      url: 'assets/0_4_HuaWeiShouJi.png'
    },
    {
      id: 5,
      title: '影音娱乐',
      url: 'assets/0_5_YingYinYuLe.png'
    },
    {
      id: 6,
      title: '运动健康',
      url: 'assets/0_6_YunDongJianKang.png'
    },
    {
      id: 7,
      title: '企业商用',
      url: 'assets/0_7_QiYeShangYong.png'
    },
    {
      id: 8,
      title: '配件',
      url: 'assets/0_8_PeiJian.png'
    },
    {
      id: 9,
      title: '全屋智能',
      url: 'assets/0_9_ZhiNengQvanWu.png'
    },
    {
      id: 10,
      title: '她之选',
      url: 'assets/0_10_TaZhiXvan.png'
    },
    {
      id: 11,
      title: '以旧换新',
      url: 'assets/0_11_YiJiuHuanXin.png'
    },
    {
      id: 12,
      title: '华为智选',
      url: 'assets/0_12_HuaWeiZhiXvan.png'
    }
  ]


  // 新手有礼，福利专区 TS 实现鼠标悬停效果
  boxShadow: string = ''

  onMouseOver_welfare_zone_body(){
    this.boxShadow = '0 0 8px rgba(0, 0, 0, 0.2)'
  }

  onMouseOut_welfare_zone_body(){
    this.boxShadow = '0 0 0 rgba(0, 0, 0, 0)'
  }
}
