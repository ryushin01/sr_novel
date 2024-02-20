```json
{
  "message": "SUCCESS",
  "result": [
    {
      // [String] 타입은 총 A, B, C까지 셋이 있습니다. 각각 로맨스, 판타지, SF소설을 뜻합니다.
      "type": "A",

      // [Array] Badge 컴포넌트는 동시에 여러 종류가 들어갈 수 있습니다.
      "badge": ["hot", "new"],

      // [String] 작품명입니다.
      "title": "거짓된 약혼(Fake Engagement)",

      // [String] 작가명입니다.
      "author": "말로",

      // [String] 장르입니다. 로맨스, 판타지, SF소설 모두 웹소설이라는 상위 장르에 속합니다.
      "genre": "웹소설",

      // [String] 이용 연령을 의미합니다.
      "age": "전체 이용가",

      // [Number] 총 회차 수입니다.
      "chapters": 3,

      // [Number] 무료로 이용할 수 있는 회차 수입니다.
      "freeChapters": 1,

      // [Number] 유료로 이용할 수 있는 회차 수입니다.
      "payChapters": 2,

      // [Number] 회차 당 가격을 의미합니다.
      "chapterFee": 200,

      // [Number] 조회수입니다.
      "views": 478,

      // [Number] 관심 작품 수입니다.
      "interests": 139,

      // [Number] 작품의 전체 별점입니다.
      "totalRating": 5,

      // [Number] 작품의 전체 댓글 수입니다.
      "totalComments": 198,

      // [String] 작품 줄거리입니다.
      "summary": "줄거리\n\n내용쓰기",

      // [Array] 작품의 해시태그입니다.
      "tag": ["로맨스", "힐링물", "친구>연인"],

      // [Array] 작품의 회차 목록입니다.
      "chapterList": [
        {
          // [Number] 회차 번호입니다. 이것을 기준으로 동적 라우팅합니다.
          "chapterNumber": 3,

          // [String] 회차 제목입니다.
          "chapterTitle": "3화",

          // [String] 회차 업데이트 일자 정보입니다.
          "updateDate": "2024.02.10",

          // [Number] 회차 총 글자 수입니다.
          "totalLetters": 5150,

          // [Number] 회차 별점입니다.
          "rating": 5,

          // [Number] 회차 댓글 수입니다.
          "comments": 3,

          // [Boolean] 회차가 무료인지 여부를 나타냅니다.
          "isFree": false
        },
        {
          "chapterNumber": 2,
          "chapterTitle": "2화",
          "updateDate": "2024.02.09",
          "totalLetters": 6036,
          "rating": 5,
          "comments": 95,
          "isFree": false
        },
        {
          "chapterNumber": 1,
          "chapterTitle": "1화",
          "updateDate": "2024.02.08",
          "totalLetters": 6218,
          "rating": 5,
          "comments": 100,
          "isFree": true
        }
      ]
    }
  ]
}
```
