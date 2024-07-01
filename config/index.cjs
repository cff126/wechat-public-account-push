/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx079436821a4836c7',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '169d18b78a67386dfd0b5d6aaa507829',

  PROVINCE: '四川',
  CITY: '成都',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'cff',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oENvb6LLc1-FRZrEHWcHe3YY1id4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'AmtmMG_qIt_0VrA9cqhTMGlPeIFRJ8rGtnh6S1B_-ug',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '1-26',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: 'cff', year: '1999', date: '12-23',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: 'cff', year: '2000', date: '01-26',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '09-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 一起的日子
        { keyword: 'love_day', date: '2024-05-26' },
        // 纪念日
        { keyword: 'marry_day', date: '2024-06-04' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'AmtmMG_qIt_0VrA9cqhTMGlPeIFRJ8rGtnh6S1B_-ug',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oENvb6HlrJZwktJdhGm-6O0_sqXI',
    }
  ],

}

module.exports = USER_CONFIG

