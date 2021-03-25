import React from "react"
import Layout from "../layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home(props) {
  return (
    <Layout location={props.location} partners>

      <h2>Газовые компрессоры</h2>

      <StaticImage src="../images/compressor.jpg" alt="A dinosaur" />
      <p>Уважаемые Господа!</p>

      <p>
        Мы предлагаем два комплектных винтовых маслонаполненных газовых
        компрессора (при необходимости есть возможность поставить и третий)
        производства VPT compressoren (Германия). Наработка данных агрегатов — 0
        моточасов, они находятся в идеальном состоянии. Мы готовы дополнительно
        произвести предпродажную ревизию и подготовку силами специалистов
        изготовителя.
      </p>

      <p>Данные агрегаты предназначены для сжатия природного газа на входе в
      турбину электрогенерирующей установки, но могут найти свое применение и в
      качестве дожимных компрессоров при технологических процессах добычи и
      хранения природного и попутного нефтяного газа.
      </p>

      <p>We can offer two complete screw oil-filled compressors of the unit (if
      necessary, there is an opportunity to put a third), packager —
      compressoren (Germany) VPT
      </p>

      <p>These units are designed for charge of natural gas at the inlet to the
      turbine of an electricity generation plant, but they also can be used as a
      booster with komperssorov technological processes of extraction and
      storage of natural and associated oil gas</p>

      <p>Паспортные данные машины technical data</p>

      <table width="640" border="1" cellSpacing="0" cellPadding="0">
          <tbody>
          <tr>
              <td valign="top" width="301">Рабочая среда medium</td>
              <td valign="top" width="149">Природный газ natural gas</td>
              <td valign="top" width="191">&nbsp;</td>
          </tr>
          <tr>
              <td valign="top" width="301">Давление на всасывании inlet
                  pressure
              </td>
              <td valign="top" width="149">8</td>
              <td valign="top" width="191">бар(aбс.) bars</td>
          </tr>
          <tr>
              <td valign="top" width="301">Рабочее давление charge pressure
              </td>
              <td valign="top" width="149">25</td>
              <td valign="top" width="191">бар(aбс.) bar</td>
          </tr>
          <tr>
              <td valign="top" width="301">Сжатие compressing</td>
              <td valign="top" width="149">Одноступенчатое single stage</td>
              <td valign="top" width="191">&nbsp;</td>
          </tr>
          <tr>
              <td valign="top" width="301">Производительность capacity</td>
              <td valign="top" width="149">11655</td>
              <td valign="top" width="191">нм 3 /час n.kub.m/hour</td>
          </tr>
          <tr>
              <td valign="top" width="301">Мощность двигателя motor power</td>
              <td valign="top" width="149">700</td>
              <td valign="top" width="191">кВт kW</td>
          </tr>
          <tr>
              <td valign="top" width="301">Мощность на валу машины shaft
                  power
              </td>
              <td valign="top" width="149">628</td>
              <td valign="top" width="191">кВт kW</td>
          </tr>
          <tr>
              <td valign="top" width="301">Частота вращения двигателя speed
                  rotation
              </td>
              <td valign="top" width="149">2985</td>
              <td valign="top" width="191">об/мин rpm</td>
          </tr>
          <tr>
              <td valign="top" width="301">Класс защиты двигателя performance
                  motor
              </td>
              <td valign="top" width="149">IP 55, ISO Kl. B, EExe II T2</td>
              <td valign="top" width="191">&nbsp;</td>
          </tr>
          <tr>
              <td valign="top" width="301">Электроподключение electrical
                  supply
              </td>
              <td valign="top" width="149">10500 в / 50 Гц /3 фазы</td>
              <td valign="top" width="191">10,5 kV 50 Hz</td>
          </tr>
          <tr>
              <td valign="top" width="301">Частота вращ. глав. двигателя
                  rotation of motor
              </td>
              <td valign="top" width="149">2985</td>
              <td valign="top" width="191">об/мин rpm</td>
          </tr>
          <tr>
              <td valign="top" width="301">Охлаждающая среда coolant</td>
              <td valign="top" width="149">вода</td>
              <td valign="top" width="191">water</td>
          </tr>
          <tr>
              <td valign="top" width="301">Расход охлаждающей среды coolant
                  flow
              </td>
              <td valign="top" width="149">прибл. 64</td>
              <td valign="top" width="191">м3 /час&nbsp; kub.m/hour</td>
          </tr>
          <tr>
              <td valign="top" width="301">Нагрев охлажд. среды от/до heating
                  of coolant from/to
              </td>
              <td valign="top" width="149">33 / 45</td>
              <td valign="top" width="191">°C</td>
          </tr>
          <tr>
              <td valign="top" width="301">Температура газа на входе incoming
                  gas temp
              </td>
              <td valign="top" width="149">прибл. +15 — 30</td>
              <td valign="top" width="191">°C</td>
          </tr>
          <tr>
              <td valign="top" width="301">Температура газа на
                  выходе&nbsp; outgoing from kit gas temp
              </td>
              <td valign="top" width="149">прибл. 40</td>
              <td valign="top" width="191">°C</td>
          </tr>
          <tr>
              <td valign="top" width="301">Темпер. на выходе компрессора temp
                  outgoing gas from compressor
              </td>
              <td valign="top" width="149">прибл. 80</td>
              <td valign="top" width="191">°C</td>
          </tr>
          <tr>
              <td valign="top" width="301">Расход циркулир.
                  масла &nbsp;lubricant oil flow
              </td>
              <td valign="top" width="149">прибл. 400</td>
              <td valign="top" width="191">л/мин l/min</td>
          </tr>
          <tr>
              <td valign="top" width="301">Общее кол-во масла в
                  баке &nbsp;totally lubricant oil volume
              </td>
              <td valign="top" width="149">прибл. 1000</td>
              <td valign="top" width="191">литр l</td>
          </tr>
          <tr>
              <td valign="top" width="301">Содержание остаточного масла в газе
                  content lubricant oil in outgoing gas
              </td>
              <td valign="top" width="149">0,1</td>
              <td valign="top" width="191">мг/нм3(после сепаратора)<p></p>
                  <p>mg/n.kub.m</p></td>
          </tr>
          <tr>
              <td valign="top" width="301">Уровень звука без
                  контейнера &nbsp;sound level in box
              </td>
              <td valign="top" width="149">прибл. 92</td>
              <td valign="top" width="191">дБ(A)</td>
          </tr>
          <tr>
              <td valign="top" width="301">Уровень звука с
                  контейнером &nbsp;sound level out box
              </td>
              <td valign="top" width="149">прибл. 80</td>
              <td valign="top" width="191">дБ(A) (шумоглушитель вентилирующего
                  воздуха)
              </td>
          </tr>
          <tr>
              <td valign="top" width="301">Потребность охлажд. воздуха cooling
                  air flow
              </td>
              <td valign="top" width="149">прибл. 17000</td>
              <td valign="top" width="191">м3/час</td>
          </tr>
          <tr>
              <td valign="top" width="301">Допуст. темпер. окруж. среды
                  ambient temp
              </td>
              <td valign="top" width="149">от -15 до +30</td>
              <td valign="top" width="191">°C (при других t°C условиях
                  требуется&nbsp; консультация с изготовителем)
              </td>
          </tr>
          </tbody>
      </table>

      <p>Главный приводной двигатель / HptMoto</p>

      <table border="1" cellSpacing="0" cellPadding="0">
        <tr>
            <td valign="top" width="461"><p>Мотор высокого напряжения</p>
                <p>700kВт / Bg.____ / B3 / 10,5 kВ 50Гц 2987об/мин</p></td>
        </tr>
        <tr>
            <td valign="top" width="461">Тип KR5
                830B-EH02&nbsp;&nbsp;&nbsp; EExe IIC T3 ISO F
                IP55&nbsp;&nbsp;&nbsp; IA/IN 7,0 te=7s 4000kг
            </td>
        </tr>
        <tr>
            <td valign="top" width="461">3 PT100 темпер.обмотки см EKH10
                CT011-013
            </td>
        </tr>
        <tr>
            <td valign="top" width="461">2* PT100 темпер. подшипников</td>
        </tr>
        <tr>
            <td valign="top" width="461">Вал Ø=95H7m6&nbsp; длина=170мм</td>
        </tr>
        <tr>
            <td valign="top" width="461">Наработка машин – 0 часов. Working
                time 0 hours
            </td>
        </tr>
        <tr>
            <td valign="top" width="461">Дата выпуска – 2002 год.</td>
        </tr>
      </table>


      <p>Машины в идеальном состоянии</p>

      <StaticImage src="../images/compressor12.jpg" alt="A dinosaur" />
      <p>готовы рассмотреть предложения по приобретению данного оборудования</p>


        <p>С уважением,</p>

      Директор ООО «НЕОКАН»&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Крымов А.В.
    </Layout>
  )
}
