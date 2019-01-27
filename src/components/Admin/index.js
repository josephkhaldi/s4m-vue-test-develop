export default ({
  name: 'Admin', 
  methods: {   
    selectItemToEdit: function(item){
      this.errors = [];
      this.showEdit = true
      this.itemChosen = item; 
      this.$refs.dataEdit.value = JSON.stringify(this.itemChosen);
    },
    saveItem: function(){ 
      if(this.checkInput(this.$refs.dataEdit.value)){
        this.$store.dispatch('addOptions', JSON.parse(this.$refs.dataEdit.value));
        this.showEdit = false
        this.itemChosen = [];       
      }
    },
    hasError: function(){
      return (this.errors.length > 0) ? true : false
    },
    checkInput: function(item){
      this.errors = [];
      //check if the item is correctly formated 
      if(!this.isJSON(item)){
        this.errors.push('Error Json parse');
        return false;
      }   
      //check if the item has a name & username 
      const itemObject = JSON.parse(item);
      if(!(itemObject.name && itemObject.username)){
        this.errors.push('Name and Username are required');
      }
      return !this.hasError();
    },
    isJSON: function(str) {
      try {
        return (JSON.parse(str) && !!str);
      } catch (e) {
        return false;
      }
    },
  },
  computed: {
    list() {
      return this.$store.state.users.users;
    },
    options() {     
      return this.$store.state.options.options;
    },   
  },
  data() {
    return {
      showEdit: false,
      itemChosen: [],
      errors: []     
    };
  },
});
