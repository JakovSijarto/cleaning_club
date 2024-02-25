<template>
    <select @change="switchLanguage" class="uppercase bg-transparent ">
        <option 
        v-for="sLocale in supportedLocales"
        :key="`locale-${sLocale}`"
        :value="sLocale"
        :selected="locale === sLocale"
        class="text-black"
        >
            {{ t(`locale.${sLocale}`) }}
        </option>
    </select>
</template>

<script>
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'

export default {
    setup(){
        const { t, locale } = useI18n()

        const supportedLocales = Tr.supportedLocales
        const switchLanguage = async (event) =>{
            const newLocale = event.target.value
            await Tr.switchLanguage(newLocale)
        }

        return { supportedLocales,t,locale,switchLanguage }
    }
}
</script>