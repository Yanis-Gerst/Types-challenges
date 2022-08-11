interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
type InorderTraversal<T extends TreeNode | null> = T extends null
  ? []
  : [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>];

//Voir pourquoi on peut utiliser les index
