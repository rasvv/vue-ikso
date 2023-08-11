<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-row class="d-flex justify-center">
          <v-list>
            <v-divider inset></v-divider>
            <a href="tel:+7-4712-22-32-32">
              <v-list-item
                prepend-icon="mdi-phone"
                title="+7-4712-22-32-32"
              ></v-list-item>
            </a>

            <v-divider inset></v-divider>
            <a href="tel:+7-904-526-77-78">
              <v-list-item
                prepend-icon="mdi-phone"
                title="+7-904-526-77-78"
              ></v-list-item>
            </a>

            <v-divider inset></v-divider>
            <a href="tel:+7-910-210-97-20">
              <v-list-item
                prepend-icon="mdi-phone"
                title="+7-910-210-97-20"
              ></v-list-item>
            </a>

            <v-divider inset></v-divider>
            <a href="mailto:ikso46@mail.ru">
              <v-list-item
                prepend-icon="mdi-email"
                title="ikso46@mail.ru"
              ></v-list-item
            ></a>
          </v-list>
          <!-- <div class="mail"><a href="mailto:ikso46@mail.ru"><i class="far fa-envelope mar"></i>ikso46@mail.ru</a></div> -->
          <!-- <div class="phone3"><a href="tel:+7-4712-22-32-32"><i class="fas fa-phone mar"></i>+7-4712-22-32-32</a></div>
					<div class="phone1"><a href="tel:+7-904-526-77-78"><i class="fas fa-mobile-alt marbig"></i>+7-904-526-77-78</a></div>
					<div class="phone2"><a href="tel:+7-910-210-97-20"><i class="fas fa-mobile-alt marbig"></i>+7-910-210-97-20</a></div> -->
        </v-row>
      </v-col>
      <v-col cols="9">
        <div class="adress">г. Курск, Лесной проезд 62</div>
        <div class="footer__map">
          <iframe
            class="footer__map-frame"
            src="https://yandex.ru/map-widget/v1/-/CCUeeBQTTD"
            width="100%"
            height="600"
            frameborder="1"
            allowfullscreen="true"
          >
          </iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


