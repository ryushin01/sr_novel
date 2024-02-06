const API_KEY = import.meta.env.VITE_ALADDIN_API_KEY;

export const API_URL = {
  BEST_SELLER: `ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Cover=Big&CategoryId=51122&OptResult=ebookList,usedList,fileFormatList&Version=20131101`,
  NEW_BOOK: `ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=itemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=js&Cover=Big&CategoryId=51122&OptResult=ebookList,usedList,fileFormatList&Version=20131101`,
  SPECIAL: `ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=ItemNewSpecial&MaxResults=10&start=1&SearchTarget=Book&output=js&Cover=Big&CategoryId=51122&OptResult=ebookList,usedList,fileFormatList&Version=20131101`,
};
