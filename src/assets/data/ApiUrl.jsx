const API_KEY = import.meta.env.VITE_ALADDIN_API_KEY;

export const API_URL = {
  BEST_SELLER: `ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Cover=Big&CategoryId=51122&OptResult=ebookList,usedList,fileFormatList&Version=20131101`,
  NEW_BOOK: `ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=itemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=js&Cover=Big&CategoryId=51122&OptResult=ebookList,usedList,fileFormatList&Version=20131101`,
  SPECIAL: `ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=ItemNewSpecial&MaxResults=5&start=1&SearchTarget=Book&output=js&Cover=MidBig&CategoryId=51122&OptResult=ebookList,usedList,fileFormatList&Version=20131101`,
  EDITOR: `ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=ItemEditorChoice&MaxResults=5&start=1&SearchTarget=Book&output=js&Cover=MidBig&CategoryId=51122&OptResult=ebookList,usedList,fileFormatList&Version=20131101`,
  BLOG: `ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=BlogBest&MaxResults=5&start=1&SearchTarget=Book&output=js&Cover=MidBig&OptResult=ebookList,usedList,fileFormatList&Version=20131101`,
  RANK: `ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=Bestseller&MaxResults=15&start=1&SearchTarget=Book&output=js&Cover=MidBig&CategoryId=51122&OptResult=ebookList,usedList,fileFormatList&Version=20131101`,
};
