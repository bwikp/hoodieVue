<script setup>
import {ref} from 'vue'
const props = defineProps({
    cartPop:Boolean
})

const emit = defineEmits(["closeCart"])
        const closeCart = () => {
               emit("closeCart");
        }
</script>
<template>
    <div :class="{overlayOff:cartPop}" class="overlay ">
       
        <div :class="{cartoff:cartPop}"  class="cart">
            <div class="TopCart">
                <div></div>
            <h1>Votre panier</h1>
                <div @click="closeCart" id="close">X</div>
            </div>
            <div class="mainCart">
                <div>
                  article
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* .overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.overlayOff{
    display: none;
}
.cartoff{
    display: none;
}
.mainCart{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 100%;
}
#close{
    margin-right:2%;
    
}

#close:hover{
    cursor: pointer;
}
.cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    width: 500px;
    height: 500px;
    border-radius: 2.5%;
}
.TopCart{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    width: 100%;
} */
</style>