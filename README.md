# blog

## 這是什麼

這是利用 React 做的比較完整一點的部落格，比較特別的地方是使用了 redux 來統一管理需要放在全域變數的資料， API 的部分也使用了 Redux-thunk 來處理 

## Demo

[Demo](https://alanyen0202.github.io/react-blog-redux-thunk/)

## 功能

- 註冊功能 ( 由於是測試 API 密碼都會變為 Lidemy )
- 登入功能 ( 會拿到 JSON Web Token 再利用 Token 來驗證身份)
- 文章列表頁面 ( 可看到所有文章，每頁顯示 5 筆 )
- 關於我頁面
- 身份驗證 ( 登入才可發表文章 )
- 發表文章
- 可看單篇文章
- 刪除文章 ( 登入才可發表文章 )
- 更改文章 ( 登入才可發表文章 )


Route 的部分使用 React Router。

[資料串接的 API](https://github.com/Lidemy/lidemy-student-json-api-server
)

