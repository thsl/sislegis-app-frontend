angular.module('sislegisapp').factory('ComissaoResource', function($resource, BACKEND){
    var resource = $resource(BACKEND + '/comissaos/:ComissaoId',{ComissaoId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});
