---
name: Sunless Citadel
---

<table>
  {% for item in site.data.sunlesscitadel %}
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

