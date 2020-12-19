const defaultDataset = {
    "init": {
        answers: [
            {content: "仕事を依頼したい", nextId: "job_offer"},
            {content: "あなたの趣味は？", nextId: "hobby"},
            {content: "好みのタイプは？", nextId: "favorite_type"},
            {content: "お付き合いしたい", nextId: "dating"},
        ],
        question: "こんにちは！たかちゃんへのご用件はなんでしょうか？",
    },
    "job_offer": {
        answers: [
            {content: "Webサイトを制作してほしい", nextId: "website"},
            {content: "Webアプリを開発してほしい", nextId: "webapp"},
            {content: "自動化ツールを作ってほしい", nextId: "automation_tool"},
            {content: "その他", nextId: "other_jobs"}
        ],
        question: "どのようなお仕事でしょうか？",
    },
    "website": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webサイト細作についてですね。コチラからお問い合わせできます。",
    },
    "webapp": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
    },
    "automation_tool": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "自動化ツール開発についてですね。コチラからお問い合わせできます。",
    },
    "other_jobs": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "その他についてですね。コチラからお問い合わせできます。",
    },
    "hobby": {
        answers: [
            {content: "飲み会に参加する", nextId: "https://twitter.com/taka12199762"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "友人とのBBQと飲み会です。誰でもウェルカムなので気軽に連絡してください",
    },
    "favorite_type": {
        answers: [
            {content: "見た目のタイプは？", nextId: "appearance_type"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "自分を持っている、意志の強い女性です。",
    },
    "appearance_type": {
        answers: [
            {content: "おっぱいとお尻、どっち派？", nextId: "love_and_peace"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "カワイイ系よりも、キレイ系がタイプです。",
    },
    "love_and_peace": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "愛は世界を救うと思います。",
    },
    "dating": {
        answers: [
            {content: "DMする", nextId: "https://twitter.com/taka12199762"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "まずは気軽にご飯でもいかがですか？DMお待ちしてます🤗",
    },
}

export default defaultDataset