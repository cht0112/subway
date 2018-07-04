

String.prototype.isEmpty = function(){
	var b = /^\s*$/.test(this);
	return b;
};
 
String.prototype.trim = function() { 
	return this.replace(/(^\s*)|(\s*$)/g, ""); 
};  

function isdigit(s){
	var r,re;
	re = /\d*/i; /*\d表示数字,*表示匹配多个数字*/
	r = s.match(re);
	return (r==s)?1:0;
}

function IsNum(s)
{
    if (s!=null && s!="")
    {
        return !isNaN(s);
    }
    return false;
}

function HashMap(){  
	this.put = function(key,value){this[key] = value}  
	this.get = function(key){return this[key]}  
	this.containsKey = function(key){return this.get(key) == null?false:true}  
	this.remove = function(key){delete this[key]}  
}




function ArrayList()
{
  this.array = new Array();
  this.add = function(obj){
    this.array[this.array.length] = obj;
  }
  this.iterator = function (){
    return new Iterator(this)
  }
  this.length = function (){
    return this.array.length;
  }
  this.get = function (index){
    return this.array[index];
  }
  this.addAll = function (obj)
  {
    if (obj instanceof Array){
      for (var i=0;i<obj.length;i++)
      {
        this.add(obj[i]);
      }
    } else if (obj instanceof ArrayList){
      for (var i=0;i<obj.length();i++)
      {
        this.add(obj.get(i));
      }
    }
  }
}

function Iterator (arrayList){
  this.arrayList;
  this.index = 0;
  this.hasNext = function (){
    return this.index < this.arrayList.length();
  }
  this.next = function() {
    return this.arrayList.get(index++);
  }
}



