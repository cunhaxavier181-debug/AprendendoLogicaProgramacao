function calcularAreaRetangulo(l, a) {
   if (typeof l !== "number" || typeof a !== "number") {
      throw new Error(
         " ao tentar executar a função calcularAreaRetangulo, pois, ela aceita dois parâmetros do tipo number",
      );
   }
   return l * a;
}

function calcularAreaTriangulo(b, a) {
   if (typeof b !== "number" || typeof a !== "number") {
      throw new Error(
         "ao tentar executar a função calcularAreaTriangulo, pois, ela aceita dois parâmetros do tipo number",
      );
   }
   return (b * a) / 2;
}
