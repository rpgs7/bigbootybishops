---
name: Waterdeep
---

<table>
  {% for item in site.data.waterdeep %}
    <tr>
    {% if item.name contains "DECEASED" %}
      <td class = "td1_dead"> {{ item.name }} </td>
    {% else %}
      <td class = "td1"> {{ item.name }} </td>
    {% endif %}
      <td class = "td2"> <div class = "p4">{{ item.description }} </div></td>
    </tr>
  {% endfor %}
</table>
<br><br>








