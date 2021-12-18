Vue.createApp({
  data: function () {
    return {
      //タイトル名
      todoTitle: "",
      //説明
      todoDescription: "",
      //選択されたカテゴリ配列
      todoCategories: [],
      //選択カテゴリ配列
      selectedCategory: [],
      //todo配列
      todos: [],
      //作成したカテゴリ配列
      categories: [],
      //隠すかBoolean
      hideDoneTodo: false,
      //検索ワード
      searchWord: "",
      //並べ方
      order: "desc",
      //カテゴリの名前
      categoryName: "",
    };
  },
  computed: {
    //Todoリスク作成チェック
    canCreateTodo: function () {
      return this.todoTitle !== "";
    },
    //カテゴリ作成チェック
    canCreateCategory: function () {
      return this.categoryName !== "" && !this.existsCategory;
    },
    //すでに作成されてないかチェック
    existsCategory: function () {
      const categoryName = this.categoryName;
      return this.categories.indexOf(categoryName) !== -1;
    },
  },
  methods: {
    //Todoの作成
    createTodo: function () {
      if (!this.canCreateTodo) {
        return;
      }

      //Todoタスクを追加する処理
      this.todos.push({
        id: "todo-" + Date.now(),
        title: this.todoTitle,
        description: this.todoDescription,
        categories: this.todoCategories,
        dateTime: Date.now(),
        done: false,
      });

      //登録後の後始末
      this.todoTitle = "";
      this.todoDescription = "";
      this.todoCategories = [];
    },
    //カテゴリの作成
    createCategory: function () {
      if (!this.canCreateCategory) {
        return;
      }

      //カテゴリを追加する処理
      this.categories.push(this.categoryName);

      this.categoryName = "";
    },
  },
}).mount("#app");
