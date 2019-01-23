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
    },
    closeMultiselect: function(){
      this.isOpen = false;
      this.$emit('Close Multiselect');    
    },
    addItem: function(item){
      this.selectedItems.push(item);
      let indexItem = this.list.indexOf(item);
      this.list.splice(indexItem, 1);
      this.$emit('Add Item To Select', item); 
    },
    removeItem: function(item){
      let indexItem = this.selectedItems.indexOf(item);
      console.log(indexItem);
      this.selectedItems.splice(indexItem, 1);
      this.list.push(item);
      this.$emit('Remove Item To Select', item); 
    },
    isEmpty: function(el){
      return !(el.length > 0);
    }
  },
  computed: {
    getList: function(){
      console.log(this.list);
      console.log(this.options);
       return (this.options.length > 0) ? this.options : this.list
    },
  },
  data() {
    return {
      isOpen: false,
      selectedItems: [],
    };
  },
});
