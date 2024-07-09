
let news = []

const getLatestNews = async()=>{ // async: 동기함수로 만들기 (await으로 기다리게 만들수 있음)

    const url = new URL(`https://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`) // URL: 인스턴스, 미리 필요한걸 해주는거

    console.log("wow",url)

    const response = await fetch(url)

    const data = await response.json() // json: 택스트 타입인데 객체 처럼 생겨서 전해받기 쉽다

    news = data.articles

    console.log("ddd", news)
}
getLatestNews()
