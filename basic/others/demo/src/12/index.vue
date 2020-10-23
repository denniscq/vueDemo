<template>
<div>
    <a-tabs>
        <a-tab-pane key="Computed" tab="计算属性">
            <Computed />
        </a-tab-pane>
        <a-tab-pane key="Watch" tab="监听器">
            <Watch />
        </a-tab-pane>
        <a-tab-pane key="VS" tab="计算属性 VS 监听器">
            <Computed1 />
            <br />
            <Watch1 />
        </a-tab-pane>
        <a-tab-pane key="WatchPre" tab="节流">
            <WatchPre />
        </a-tab-pane>
    </a-tabs>
</div>
</template>

<script>
import Computed from "./Computed";
import Watch from "./Watch";
import Computed1 from "./Computed1";
import Watch1 from "./Watch1";
import WatchPre from "./Watch_Pre";

export default {
    components: {
        Computed,
        Watch,
        Computed1,
        Watch1,
        WatchPre
    },
};
</script>

<style>
</style>
