<template>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-md-6">
                            {{ store.title }}
                        </div>
                        <div class="col-md-6 text-right">
                            <create-button :name="'users-create'"></create-button>
                        </div>
                    </div>

                </div>
                <div class="panel-body">
                    <form @submit.prevent="onSubmit" >
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="name">Name:</label>
                                        <input type="text" class="form-control" id="name" v-model="item.name"
                                               placeholder="Name"/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <button class="btn btn-primary" v-if="item.id">Edit</button>
                                    <button class="btn btn-success" v-else>Create</button>
                                </div>
                            </div>
                        </form>
                  
                </div>
                <div class="panel-footer">
                    <crud-back :name="module"></crud-back>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CrudEdit from '../../components/Crud/Edit'
    import CrudBack from "../../components/Crud/Back.vue";
    import CreateButton from "../../components/Crud/CreateButton.vue";
    import CrudForm from '../../components/Crud/Form'

    export default {
        mixins: [CrudEdit],
        components: {CrudBack, CreateButton},
        data() {
            return {
                module: 'countries'
            }
        }
    }
</script>
