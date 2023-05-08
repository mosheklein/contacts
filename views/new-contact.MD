<%- include('./partials/header.ejs') %>    
<div class="create-blog content">
            <form>
              
                <input type="text" id="fname" name="fname" required placeholder="First Name:">
                <input type="tel" id="phone" name="phone" required placeholder="Phone:">
                <input type="email" id="phone" name="email" required placeholder="Email:">
                <select>
                    <option value="0">Region:</option>
                    <option value="1">South</option>
                    <option value="2">North</option>
                    <option value="3">Center</option>
                    <option value="4">East</option>
                    <option value="5">West</option>
                </select>
                
              <button>Submit</button>
            </form>
          </div>

    </main>
<%- include('./partials/footer.ejs') %>    
