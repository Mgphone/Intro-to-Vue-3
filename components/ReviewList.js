app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    ` <div class="review-container">
      <h3>Review:</h3>
      <ul>
      <li v-for="(review,index) in reviews" :key="index">
      <div>
      <p>{{index+1}}</p>
      {{review.name}} gave a rating {{review.rating}} stars 
      <br/>
      Customer Recommand {{review.recommand}}
      <br />
      {{review.review}}
      <br/>
      </li>
      </div>
      </ul>
    </div>`,
});
