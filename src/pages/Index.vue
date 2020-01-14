<template>
  <Layout class="base-index">
    <div class="main-content">
    <div class="content main-title">
      <section>
        <div>
          <h1>
            B<span>OS</span>Q<span>UE</span>
            <span> R</span>.<span>E</span>.A.<span>L</span>.
          </h1>
          <h3>
            REVISIÓN EXPANDIDA, AUMENTADA Y LITERAL DE LA CASA DE CAMPO DE
            MADRID
          </h3>
        </div>
      </section>
    </div>
    <div class="content pa-3 description">
      <section>
        <p>
          BOSQUE R.E.A.L. nace, en forma de festival, para visitar desde la
          contemporaneidad la historia y anécdotas de la Casa de Campo de
          Madrid.
        </p>
        <p>
          Decir BOSQUE REAL es como decir BOSQUE FUERTE.
        </p>
        <p>
          Nuestro BOSQUE es R.E.A.L. porque Revisa de manera Expandida,
          Aumentada y Literal los espacios e historias de la Casa de Campo. Es
          un festival, pues de algún modo hay que llamarlo, que nos cita en
          seguidas ocasiones durante los meses de mayo y junio y lo hace de la
          mano de varixs artistas alrededor de un Almacén de Cantería, del
          hallazgo de un delfín marino, de los sonidos de la Guerra desde el
          Cerro Garabitas y de las imágenes posibles de aquel día en el que,
          finalmente, se abrió la Puerta del Rey y 300.000 personas accedieron a
          UN NUEVO LUGAR.
        </p>
      </section>
    </div>
    <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo" />
    </div>
    <g-image class="main-background" src="~/assets/images/bosque_real_peq.jpg"></g-image>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
        featuredMedia {
          sourceUrl
          altText
          mediaDetails {
            width
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
import Post from "~/components/Post.vue";

export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'Bosque R.E.A.L'
  }
};
</script>

<style lang="scss" scoped>

@import "../assets/scss/working.scss";
.base-index {
  /*background-color: red;*/
  margin: 0 auto;
  padding: 10px;
  .content{
    background-color: white;
    border: 5px solid black;
    padding: 20px;
    margin: 10px 0;
    p:last-child{
      margin: 0;
    }
  }
  .main-title {
    h1,h2,h3,p{
      margin: 0;
    }
    h3{
    }
    h1 {
      /*text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.58);*/
      font-size: 5em;
      line-height: 1em;
      font-family: "Digestive Normal";
      font-weight: 500;
      @include media(S){
      font-size: 3.5em;

      }
      span {
        font-family: "Digestive Condensed";
      }
    }
    h3 {
      /*font-family: "VCR OSD Mono";*/
      font-size: 1.3em;
      font-weight: 500;
      margin-top: 1em;
      @include media(S){
        font-size: 1em;
      }
      span {
        font-size: 1.1em;
      }
    }
    p > span {
      display: flex;
      align-items: center;
    }
    i {
      margin-right: 5px;
    }
  }
}
</style>
