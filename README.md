jTab
====

概要など
====
あれです、どうもです。
誰でも簡単にjQueryでちょっとした動きをサイトに取り入れられたらきっとみんながハッピーになっちゃうんじゃない？
そんな単純な考えで作ったのが「jTab」です。

出来ることは1つ。
タブ切り替えの動作をサイトに実装すること！
今後は「みんなハッピープロジェクト（仮）」としていろんなものを作っていきたいなとか思っています。

その第一弾！ということです。


で？どうやって使うの？
====
こっちにもデモ環境があったり、zipファイルをダウンロードしてもらえればわかると思うのですが、

1.プラグインを読み込みます。
2.HTMLのプラグインを読み込んだ後に
  $(".box").jTab({
		animate:true,
		duration: 400
	});

とか書いちゃいます。

3.こんなHTMLを書いちゃいます。

   <div class="box">
        <ul class="tabs">
            <li>タブ部分</li>
        </ul>
        
        <div>コンテンツ部分</div>
    </div>
    
はい、おっぱｐｐ(ry


サポート？
====
本当に簡単なので(自分で言うのか・・・)ダウンロードしたファイルを熟読してね！
あ、サポートとかいらないと思うけど必要だったらTwitterとかで呼びかけるか祈ってください！
@aki_star02

だいたいこのアカウントで何かやってます。