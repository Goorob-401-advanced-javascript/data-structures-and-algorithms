'use strict';

function treeIntersection(tree1 ,tree2){

  let treeValues = [];
  let result = [];
  let p1 = tree1.head ;
  let p2 = tree2.head ;
  let _walk = (node) => {
    treeValues.push(node.val);
    if(node.left)_walk(node.left);
    if(node.right)_walk(node.right);
  };
  _walk(p1);

  let _walk2 = (node) => {
    if(treeValues.includes(node.val))result.push(node.val);
    if(node.left)_walk2(node.left);
    if(node.right)_walk2(node.right);
  };
  _walk2(p2);
  return result ;
}




module.exports = treeIntersection ;