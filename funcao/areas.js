function calcularAreaRetangulo(l, a) {
   // Verifica se largura e altura são números.
   if (typeof l !== "number" || typeof a !== "number") {
      // Interrompe a função e cria um erro com uma mensagem personalizada.
      throw new Error(
         "ao tentar executar a função calcularAreaRetangulo, pois, ela aceita dois parâmetros do tipo number",
      );
   }

   // Se não houve erro, calcula e retorna a área do retângulo.
   return l * a;
}

function calcularAreaTriangulo(b, a) {
   // Verifica se base e altura são números.
   if (typeof b !== "number" || typeof a !== "number") {
      // Interrompe a função e cria um erro com uma mensagem personalizada.
      throw new Error(
         "ao tentar executar a função calcularAreaTriangulo, pois, ela aceita dois parâmetros do tipo number",
      );
   }

   // Se não houve erro, calcula e retorna a área do triângulo.
   return (b * a) / 2;
}

function calcularAreaCirculo(r) {
   // Verifica se o raio recebido é um número.
   if (typeof r !== "number") {
      // Interrompe a função e cria um erro com uma mensagem personalizada.
      throw new Error("calcularAreaCirculo: raio precisa ser number");
   }

   // Se não houve erro, calcula e retorna a área do círculo.
   return Math.PI * r ** 2;
}
