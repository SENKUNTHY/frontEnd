
new Vue({
    el:'#app',
    data:{
        books:[],
        author_id:null,
        title:'',
        body:'',
        updateId:null,
        url:"http://localhost:8000/api/books",
        isHidden:false,
    },
    methods:{
        getInfo(){
            axios.get(this.url).then(response=>{
                console.log(this.books=response.data.data);
            });
            
        },
        createBook(){
            let data={author_id:parseInt(this.author_id),
                title:this.title,
                body:this.body
            };
            axios.post(this.url,data).then(()=>{
                window.location.reload();
            });
        },
        deleteBook(id) {
            axios.delete(this.url +'/'+ id).then(() => {
                window.location.reload()
            });
        },
        editBook(book){
            this.author_id=book.author_id;
            this.title=book.title;
            this.body=book.boy;
            this.updateId=book.id;
            this.isHidden=true
        },
        updateBook() {
            let data={author_id:parseInt(this.author_id),
                title:this.title,
                body:this.body};
            axios.put(this.url+'/'+this.updateId, data).then(()=>{
                window.location.reload();
            });
            this.isHidden=false
        },
    },
    mounted() {
        this.getInfo();
    },
})
