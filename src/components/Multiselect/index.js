export default ({
  name: 'Multiselect',
  props: {
    list: Array,
    options: Array,   
  },
  methods: {   
    openMultiselect: function(e){
      this.isOpen = true;
      this.$emit('Open Multiselect');
      this.startNavigation();  
    },
    closeMultiselect: function(){
      this.isOpen = false;
      this.$emit('Close Multiselect');
      this.stopNavigation();    
    },
    addItem: function(item){
      this.selectedItems.push(item);
      const indexItem = this.list.indexOf(item);
      this.list.splice(indexItem, 1);
      this.$emit('Add Item To Select', item); 
    },
    removeItem: function(item){
      const indexItem = this.selectedItems.indexOf(item);
      this.selectedItems.splice(indexItem, 1);
      this.list.push(item);
      this.$emit('Remove Item To Select', item); 
    },
    isEmpty: function(el){
      return !(el.length > 0);
    },
    startNavigation: function(){
      document.addEventListener("keyup", this.navigate);    
    },    
    stopNavigation: function(){
      document.removeEventListener("keyup", this.navigate);       
    },
    // handle arrow navigation in list
    navigate: function(e){
      if(e.keyCode == 13){ // enter
        this.onEnter(e);
      }
      if(e.keyCode == 38){ // up arrow
        this.onArrowUp();
      }
      if(e.keyCode == 40){ // down arrow
        this.onArrowDown();
      }     
    },
    onArrowUp: function(){
      if(this.navigationPosition > 0){
        this.navigationPosition--;
      }
    },
    onArrowDown: function(){
      if(this.navigationPosition < (this.filterList.length - 1)){
        this.navigationPosition++;
      }
    },
    onEnter: function(){
      this.addItem(this.filterList[this.navigationPosition])
    },
    // autofill search input when tab is pressed
    autofillSearch: function(){
      if(this.filterList.length > 0 && this.search.length > 0){
        this.search = this.filterList[0].name;
      }
    }   
  },
  computed: {
    // if options isn't empty we use it over list
    getList: function(){
      return (this.options.length > 0) ? this.options : this.list;
    },
    // filter items when searched
    filterList: function(){
      return this.getList.filter(item => {
        const nameFound = item.name.toLowerCase().includes(this.search.toLowerCase());
        const usernameFound = item.username.toLowerCase().includes(this.search.toLowerCase());
        return nameFound || usernameFound;
      })
    },
  },
  data() {
    return {
      isOpen: false,
      selectedItems: [],
      search: '',
      navigationPosition: 0,
    };
  },
});
