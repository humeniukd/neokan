import React from "react"
import Layout from "../layout"
import { StaticImage } from "gatsby-plugin-image"
import Partners from '../components/Partners'

export default function Home(props) {
  return (
    <Layout location={props.location} partners>
      <p>
        <StaticImage src="../images/branch1.jpg" alt="A dinosaur" />
        &nbsp;
        <strong> &nbsp;НЕОКАН</strong> является дилером&nbsp; ряда
        зарубежных компаний &nbsp;— производителей и поставщиков
        высококачественных стальных &nbsp;труб и
        выполняет &nbsp;поставки&nbsp; самого&nbsp; разнообразного <strong>ассортимента
            трубного металлопроката</strong> &nbsp;различных
        международных стандартов&nbsp; ASTM, EN-10208-2:1996, SY/T5037
        -2000,GB9711.1, GB9711.2 , ANSI/API5L (PSL-1.PSL-2.PSL-3)
        , &nbsp;качество материалов &nbsp;изготовляемой трубы А,В,Х-42
        ,46,52,,56,60,62,70 , а также согласно ГОСТ
        , &nbsp;и &nbsp;имеющих соответствующие международные
        сертификаты &nbsp;качество производства.</p>
      <p>Наш ассортимент&nbsp; — это&nbsp; бесшовные трубы, горяче- и
          холоднокатаные, а также &nbsp;сварные трубы,&nbsp; трубная
          продукция других профилей и фасонные части трубопроводов
          (отводы, тройники, переходы). Большая номенклатура готовой
          продукции имеется на складе, что позволяет&nbsp; сократить сроки
          поставки до&nbsp; минимума.</p>
      <p>По вопросам поставок обращайтесь по&nbsp; адресу <a
        href="mailto: info@neokan.com.ua"><strong>info@neokan.com.ua</strong></a>
      </p>
    </Layout>
  )
}
