$(() => {
  const jHeader = $('header') // 影をつける対象
  const jMain = $('main')     // スクロール判定する対象

  jMain.scroll(() => {
    if (jMain.scrollTop()) {
      // スクロールの位置がトップではない
      // 影をつける
      // なおjQueryのaddClassはクラス名が重複しないようにしてくれ
      jHeader.addClass('with-scroll')
    } else {
      // スクロールの位置がトップにある
      // 影を消す
      // なおjQueryのremoveClassはクラス名がなければ何もしない
      jHeader.removeClass('with-scroll')
    }
  })
})