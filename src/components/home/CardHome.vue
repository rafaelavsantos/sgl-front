
<template>
  <div>
    <h1>Os livros mais populadores do mundo</h1>
    <ContentHome
      v-for="(item, index) in items"
      :key="item.id"
      :src="item.src"
      :alt="item.alt"
      :title="item.title"
      :description="item.description"
      :href="item.href"
      :index="index"
    />
  </div>
  
</template>

<script setup>
import ContentHome from './ContentHome.vue';
import { ref } from 'vue';

const items = ref([
  {
    id: 1,
    src: "/img/hp.svg",
    alt: "Livro de Harry Potter",
    title: "A Saga Harry Potter", 
    description: "A história começa com um menino que perdeu os pais e ele foi o único que sobreviveu há um atentado do bruxo Voldemort.",
    href: "https://www.amazon.com/-/pt/dp/6555321806/ref=sr_1_14?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EYQAG3XQO381&keywords=harry+potter+e+a+pedra+filosofal&qid=1689097205&s=books&sprefix=harry+potter+e+a+pedra+filosofal%2Cstripbooks-intl-ship%2C219&sr=1-14"
  },
  {
    id: 2,
    src: "/img/anne.svg",
    alt: "Livro de Anne Frank",
    title: "O Diário de Anne Frank", 
    description: " Anne Frank, uma menina judia, que viveu durante a Segunda Guerra Mundial e se escondeu com sua família e outros judeus em um anexo secreto em Amsterdã, nos Países Baixos, para escapar da perseguição nazista.",
    href: "https://www.amazon.com/-/pt/dp/6586181550/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3E898AIETP66J&keywords=diario+de+anne+frank&qid=1689097245&s=books&sprefix=diario+de+anne+frank%2Cstripbooks-intl-ship%2C216&sr=1-2"
  },
  {
    id: 3,
    src: "/img/prince.svg",
    alt: "Livro do Pequeno Príncipe",
    title: "O Pequeno Príncipe", 
    description: "A hístória começa com a queda de um avião no deserto do Saara, o piloto faz amizade com essa sábia criança, que consegue ver o que os adultos são incapazes.",
    href: "https://www.amazon.com/-/pt/dp/1405288191/ref=sr_1_2?crid=2JQ5ABUVDA6NO&keywords=o+pequeno+principe&qid=1689097281&s=books&sprefix=o+pequeno%2Cstripbooks-intl-ship%2C223&sr=1-2"
  },
  {
    id: 4,
    src: "/img/regras-vida.svg",
    alt: "Livro de Jordan B. Peterson",
    title: "12 Regras para a vida", 
    description: "É um manual de liderança pessoal que combina psicologia, antropologia, política e religião em um diálogo fluído/assertivo.",
    href: "https://www.amazon.com.br/12-regras-para-vida-ant%C3%ADdoto/dp/8550802751/ref=sr_1_3?adgrpid=126921376996&dib=eyJ2IjoiMSJ9.l8o19YZwkv7Bigrau4IbRjLvaWmtWT3eybu6Bx7jZ3B8d5odn7OQH03vRF_BuUMn2JPSPREbCH3RAxXv2FjqeOyG5TDHdlqQYaYP2JTm-SZGAm0Lbwakj3TUe3-O_nTwMdZ02WJ2mqHvqC7HUimAdKPvOEW5UddBWjbt2x_eEeQoDM4YElrZHLUWnj1qHcLucGbwJKjEHugez1t2w27PjdshSvs6kN5SaKwV7GHZL2BJwfHMiP_lpIN0c7WBPtebsfymctsNbr101H0naOsN7hxSl4lAJFrlY9swofQnHyA.kl7hD91-0_7Z7strQX0292d-7UOtMShKqL3t6-Kr-HY&dib_tag=se&gclid=Cj0KCQjwir2xBhC_ARIsAMTXk86Q6JYZql17P8ppXaYAsANAFHqVSnF3rG5ChtE36Q7MEi7-YjHlWyQaAoQwEALw_wcB&hvadid=593250399119&hvdev=c&hvlocphy=1001536&hvnetw=g&hvqmt=e&hvrand=9520862349028248568&hvtargid=kwd-427388817998&hydadcr=14396_13408557&keywords=12+regras+para+a+vida&qid=1714424129&sr=8-3"
  },
])

</script>

<style scoped>

h1 {
  text-align: center;
  padding: 30px;
  text-transform: uppercase;
}

</style>