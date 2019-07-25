
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope, $http, $q, constService, dataService, serverService) {

$scope.data ={}
$scope.filt_data = {}
console.log("controller")
dataService.init()
var promis = serverService.getData()
    promis.then(function(res){
        $scope.data = res
    })

    $scope.clicked = function()
    {   
     serverService.getDataById($scope.id);
    }

  /*  let id ;
    let flag;

    $scope.todos = []
    this.x

    let p ;
    $scope.clicked = function(_id)
    {
      //  $scope.id = id;
    
      flag =1
      id = _id
      if(id=='') flag=0;
        console.log(id)
    }
    if (flag==1)
    {
        p = $http.get("https://jsonplaceholder.typicode.com/posts/" + id)

    }
    else p= $http.get("https://jsonplaceholder.typicode.com/posts")
    console.log(p)
    p.then( (resp) => {
        // happens in the future - when the responsee will come back!

        console.log(resp.data)

        $scope.todos = resp.data

    }, (err) => {
        console.log(`ERROR === ${err}`)   
    }
    )*/
}
