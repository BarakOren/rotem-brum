export const getWidth = () => ({
    type: "GET_WIDTH"
})

export const run = () => {
        function handleResize(){
            return window.innerWidth;  
        }
        return handleResize();
}